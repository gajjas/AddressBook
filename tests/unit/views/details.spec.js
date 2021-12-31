import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Details from '@/views/Details.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)
localVue.use(Vuex)

describe('ContactItem.vue', () => {
  let state
  let store

  beforeEach(() => {
    state = {
      selectedContact: null
    }
    store = new Vuex.Store({
      state
    })
  })

  it('renders when all contact info is available', () => {
    state = {
      selectedContact: {
        "gender": "female",
        "name": {
          "title": "Ms",
          "first": "Friedhilde",
          "last": "Meißner"
        },
        "location": {
          "street": {
            "number": 2735,
            "name": "Am Sportplatz"
          },
          "city": "Jerichow",
          "state": "Baden-Württemberg",
          "country": "Germany",
          "postcode": 13504,
          "coordinates": {
            "latitude": "-41.2079",
            "longitude": "155.2827"
          },
          "timezone": {
            "offset": "-12:00",
            "description": "Eniwetok, Kwajalein"
          }
        },
        "email": "friedhilde.meissner@example.com",
        "login": {
          "uuid": "59c04060-0bef-4cfd-94ef-dc3ee85cf853",
          "username": "yellowsnake783",
          "password": "tigers1",
          "salt": "Q49X0Z2q",
          "md5": "2979a90a319092b028111f5b9ec7e7fc",
          "sha1": "6338ee4abc47ad7e68f39347a5e33ab7e739629f",
          "sha256": "ff52818f7e81e96d785d79abd804a5f20e316a65325abd00c68fc95bfccd3a91"
        },
        "dob": {
          "date": "1955-01-18T12:34:52.002Z",
          "age": 66
        },
        "registered": {
          "date": "2017-12-07T01:52:03.600Z",
          "age": 4
        },
        "phone": "0537-9532701",
        "cell": "0172-4912535",
        "id": {
          "name": "",
          "value": null
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/87.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/87.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/87.jpg"
        },
        "nat": "DE"
      }
    }
    store = new Vuex.Store({
      state
    })

    const wrapper = mount(Details, { store, localVue })

    const picture = wrapper.find('.details-image')
    expect(picture.exists()).toBe(true)

    const firstname = wrapper.find('.details-name-first')
    expect(firstname.text() == state.selectedContact.name.first).toBe(true)

    const lastname = wrapper.find('.details-name-last')
    expect(lastname.text() == state.selectedContact.name.last).toBe(true)

    const age = wrapper.find('.details-age')
    expect(age.text() == state.selectedContact.dob.age.toString()).toBe(true)

    const gender = wrapper.find('.details-gender')
    expect(gender.text() == state.selectedContact.gender).toBe(true)

    const phone = wrapper.find('.details-phone')
    expect(phone.text() == state.selectedContact.phone).toBe(true)

    const cell = wrapper.find('.details-cell')
    expect(cell.text() == state.selectedContact.cell).toBe(true)

    const location = wrapper.find('.location-item')
    expect(location.exists()).toBe(true)
  })

  it('renders when contact info is not available', () => {
    state = {
      selectedContact: {}
    }
    store = new Vuex.Store({
      state
    })

    const wrapper = mount(Details, { store, localVue })

    const picture = wrapper.find('.details-image')
    expect(picture.exists()).toBe(false)

    const firstname = wrapper.find('.details-name-first')
    expect(firstname.text() == 'N/A').toBe(true)

    const lastname = wrapper.find('.details-name-last')
    expect(lastname.text() == 'N/A').toBe(true)

    const age = wrapper.find('.details-age')
    expect(age.text() == 'N/A').toBe(true)

    const gender = wrapper.find('.details-gender')
    expect(gender.text() == 'N/A').toBe(true)

    const phone = wrapper.find('.details-phone')
    expect(phone.text() == 'N/A').toBe(true)

    const cell = wrapper.find('.details-cell')
    expect(cell.text() == 'N/A').toBe(true)

    const location = wrapper.find('.location-item')
    expect(location.exists()).toBe(false)
  })
})