---
title: Integration
description: Integrating the tile service into Mapbox
order: 4
---

# Integration
Our tile service integrates easily with Mapbox. We provide you with a url parameter called `x_client_id` or a header called `x-client-id`. If you use the `x_client_id` url parameter it should work out of the box. If you would like to use the headers you will need to transform your requests towards Mapbox. How you do that varies per platform.

## Using the URL Parameter
When using the URL parameter you can simply use the tile service base URL and extend it like this;

<code-block lang="bash" prefix="Tile Service" title="URL Parameter">
https://api.chargetrip.io/station/{z}/{x}/{y}/tile.mvt?x_client_id='YOUR_CLIENT_ID_HERE'
</code-block>

## Transforming Mapbox requests
Since adding headers to a Mapbox request is not as straight-forward as using the URL parameter we decided to outline the basics per platform. For more detailed information head over to [Mapbox](https://docs.mapbox.com/).

### Javascript
When using the `mapboxgl` Javascript library you can use the `transformRequest` parameter. Here is a snippet to give you an idea of how this will look when we combine everything together;

<code-block lang="js" prefix="Tile Service" title="Header">
var map = new mapboxgl.Map({
  container: 'map',
  center: [-122.420679, 37.772537],
  zoom: 13,
  transformRequest: (url, resourceType)=> {
    if(resourceType === 'Tile' && url.startsWith('https://api.chargetrip.io')) {
       return {
        url: url,
        headers: { "x-client-id": "YOUR_CLIENT_ID_HERE" },
      }
    }
  }
});
</code-block>

### React Native
When using the Mapbox react native implementation it's pretty similar to the javascript variant but you will need to take a few additional steps. You can read all about it in our [blogpost](https://medium.com/chargetrip/chargetrip-tile-service-with-react-native-and-mapbox-228dae36a574).

### iOS
When using Mapbox version 9 or lower for iOS you will need to use a method swizzler. A more detailed explanation is provided inside this [Github issue](https://github.com/mapbox/mapbox-gl-native/issues/3597#issuecomment-386142248).

When using Mapbox version 10 or up for iOS, you can [subclass the networking layer](https://docs.mapbox.com/ios/beta/maps/guides/migrate-to-v10/#modular-architecture) and add your headers. At the time of writing, it should look like this;

<code-block lang="swift" prefix="Tile Service" title="Header">
class MapboxNetworkingService: HttpServiceInterface {
  func request(for request: HttpRequest, callback: @escaping HttpResponseCallback) -> UInt64 {
    var urlRequest = URLRequest(url: URL(string: request.url)!)
    &nbsp;
    let methodMap: [MapboxCommon.HttpMethod: String] = [
      .get: "GET",
      .head: "HEAD",
      .post: "POST"
    ]
    &nbsp;
    urlRequest.httpMethod = methodMap[request.method]!
    urlRequest.httpBody = request.body
    urlRequest.allHTTPHeaderFields = request.headers
    &nbsp;
    if request.url.contains("https://api.chargetrip.io") {
      urlRequest.addValue("YOUR_CLIENT_ID_HERE", forHTTPHeaderField: "x-client-id")
      urlRequest.addValue("max-age=0", forHTTPHeaderField: "Cache-Control")
    }
    &nbsp;
    let task = URLSession.shared.dataTask(with: urlRequest) { (data, response, error) in
      let expected: Result&#60;HttpResponseData, HttpRequestError&#62;
      &nbsp;
      if let error = error {
        let requestError = HttpRequestError(type: .otherError, message: error.localizedDescription)
        expected = .failure(requestError)
      } else if let response = response as? HTTPURLResponse, let data = data {
        var headers: [String: String] = [:]
        for (key, value) in response.allHeaderFields {
          guard let key = key as? String,
                let value = value as? String else {
            continue
          }
          &nbsp;
          headers[key.lowercased()] = value
        }
        &nbsp;
        let responseData = HttpResponseData(headers: headers, code: Int64(response.statusCode), data: data)
        expected = .success(responseData)
      } else {
        let requestError = HttpRequestError(type: .otherError, message: "Invalid response")
        expected = .failure(requestError)
      }
      &nbsp;
      let response = HttpResponse(request: request, result: expected)
      callback(response)
    }
    &nbsp;
    task.resume()
    &nbsp;
    return UInt64(task.taskIdentifier)
  }
}

</code-block>

Don't forget to set this subclass early on in the app's lifecycle;

<code-block lang="swift" prefix="Tile Service" title="Mapbox Networking">
HttpServiceFactory.setUserDefinedForCustom(MapboxNetworkingService())
<code-block>


