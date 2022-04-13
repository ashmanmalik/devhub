import { Module, Mutation, VuexModule } from 'vuex-module-decorators'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import { Action } from 'vuex-class'
const store = new Vuex.Store({})

@Module({ namespaced: false, dynamic: true, store, name: 'root' })
export default class extends VuexModule {
  _dirs: string[] = []
  _darkMode = Cookies.get('dark_mode') === 'true'
  _querySchema: null | object = null
  _schemas = {}
  _sideNav: null | object = null
  _carList: null | [] = null
  _carCount: null | number = null
  _isEditing = false
  _content: null | object = null
  _user: object = { name: '', description: '' }

  @Mutation
  setDarkMode(darkMode: boolean) {
    this._darkMode = darkMode
    Cookies.set('dark_mode', darkMode.toString(), { expires: 365 })
  }

  @Mutation setIsEditing(val: boolean) {
    this._isEditing = val
  }

  @Mutation
  setSideNav(sideNav: object) {
    this._sideNav = sideNav
  }

  @Mutation
  setSchemas(schemas) {
    this._schemas = schemas
  }

  @Mutation
  setUser(user: object) {
    this._user = user
  }

  @Mutation
  setDirs(dirs: string[]) {
    this._dirs = dirs
  }

  @Mutation
  setCarCount(count) {
    this._carCount = count
  }

  @Mutation
  setCarList(carList) {
    this._carList = carList

    this._carCount = carList.length
  }

  @Mutation
  setQuerySchema(querySchema: object) {
    this._querySchema = querySchema
  }

  @Mutation
  setContent(content: object) {
    this._content = content
  }

  get darkMode() {
    return this._darkMode
  }

  get user() {
    return this._user
  }

  get schemas() {
    return this._schemas
  }

  get carCount() {
    return this._carCount
  }

  get carList() {
    return this._carList
  }

  get querySchema() {
    return this._querySchema
  }

  get isEditing() {
    return this._isEditing
  }

  get dirs() {
    return this._dirs
  }

  get content() {
    return this._content
  }

  get sideNav() {
    return this._sideNav
  }
}
