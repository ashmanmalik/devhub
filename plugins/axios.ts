export default function ({ $axios }) {
  $axios.onResponse((response) => response.data)
}
