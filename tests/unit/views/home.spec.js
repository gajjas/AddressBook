import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/views/Home.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Home.vue', () => {
  let state
  let store
  let testData = [
    {
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
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Jorge",
        "last": "Peixoto"
      },
      "location": {
        "street": {
          "number": 535,
          "name": "Rua Dezesseis de Maio"
        },
        "city": "Jaú",
        "state": "Pará",
        "country": "Brazil",
        "postcode": 81679,
        "coordinates": {
          "latitude": "50.4691",
          "longitude": "-148.4036"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "jorge.peixoto@example.com",
      "login": {
        "uuid": "246e2386-8118-4b40-879c-151723adcff1",
        "username": "yellowwolf192",
        "password": "rootbeer",
        "salt": "gwgBhlNY",
        "md5": "85003b917e3b41f72d55b888eb9cecff",
        "sha1": "9aa35fa203c553b78f1e72689481452af1dda712",
        "sha256": "b5618691938d537508fa5449e88ab2f832269d3a605affbd4eaefc9a4eff015b"
      },
      "dob": {
        "date": "1997-10-04T01:38:04.947Z",
        "age": 24
      },
      "registered": {
        "date": "2016-11-17T04:53:04.085Z",
        "age": 5
      },
      "phone": "(74) 3785-1615",
      "cell": "(42) 3349-2002",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/17.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/17.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/17.jpg"
      },
      "nat": "BR"
    }
  ]

  beforeEach(() => {
    state = {
      contacts: [],
    }

    store = new Vuex.Store({
      state
    })
  })

  it('renders correctly when passed a state that is an empty array', () => {
    const wrapper = shallowMount(Home, { store, localVue })
    const contactWrapper = wrapper.findAllComponents('.contact-wrapper')
    expect(contactWrapper.length === 0)
  })

  it('renders correctly when passed a state that is an non-empty array', () => {
    state = {
      contacts: () => testData,
    }

    store = new Vuex.Store({
      state
    })
    const wrapper = shallowMount(Home, { store, localVue })
    const contactWrapper = wrapper.findAllComponents('.contact-wrapper')
    expect(contactWrapper.length === testData.length)
  })

})
