import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import ContactItem from '@/components/ContactItem.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)
localVue.use(Vuex)
localVue.use(VueRouter)
const router = new VueRouter()

describe('ContactItem.vue', () => {
    let state
    let mutations
    let store

    beforeEach(() => {
        state = {
            selectedContact: null
        }

        mutations = {
            setSelectedContact(state, payload) {
                state.selectedContact = payload
            }
        }

        store = new Vuex.Store({
            state,
            mutations
        })
    })

    // Empty object given
    it('renders component when contact prop is empty object', () => {
        const wrapper = mount(ContactItem, { propsData: { contact: {} }, store, localVue })

        const avatar = wrapper.find('.contact-image-avatar')
        expect(avatar.exists()).toBe(false)

        const name = wrapper.find('.contact-name')
        expect(name.exists()).toBe(false)
    })

    // Missing Picture Tests
    it('renders component when contact prop is missing picture thumbnail', () => {
        let testContact = {
            "name": {
                "title": "Ms",
                "first": "Friedhilde",
                "last": "Meißner"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/87.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/87.jpg",
                // "thumbnail": "https://randomuser.me/api/portraits/thumb/women/87.jpg"
            }
        }

        const wrapper = mount(ContactItem, { propsData: { contact: testContact }, store, localVue })

        const avatar = wrapper.find('.contact-image-avatar')
        expect(avatar.exists()).toBe(false)

        const name = wrapper.find('.contact-name')
        expect(name.exists()).toBe(true)
    })

    it('renders component when contact prop is missing picture', () => {
        let testContact = {
            "name": {
                "title": "Ms",
                "first": "Friedhilde",
                "last": "Meißner"
            },
            // "picture": {
            //     "large": "https://randomuser.me/api/portraits/women/87.jpg",
            //     "medium": "https://randomuser.me/api/portraits/med/women/87.jpg",
            //     "thumbnail": "https://randomuser.me/api/portraits/thumb/women/87.jpg"
            // }
        }

        const wrapper = mount(ContactItem, { propsData: { contact: testContact }, store, localVue })

        const avatar = wrapper.find('.contact-image-avatar')
        expect(avatar.exists()).toBe(false)

        const name = wrapper.find('.contact-name')
        expect(name.exists()).toBe(true)

        expect(name.text() == testContact.name.first + " " + testContact.name.last)
    })

    // Missing Name Tests
    it('renders component when contact prop is missing name', () => {
        let testContact = {
            // "name": {
            //     "title": "Ms",
            //     "first": "Friedhilde",
            //     "last": "Meißner"
            // },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/87.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/87.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/87.jpg"
            }
        }

        const wrapper = mount(ContactItem, { propsData: { contact: testContact }, store, localVue })

        const avatar = wrapper.find('.contact-image-avatar')
        expect(avatar.exists()).toBe(true)

        const name = wrapper.find('.contact-name')
        expect(name.exists()).toBe(false)
    })

    it('renders component when contact prop is missing first name', () => {
        let testContact = {
            "name": {
                "title": "Ms",
                // "first": "Friedhilde",
                "last": "Meißner"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/87.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/87.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/87.jpg"
            }
        }
        const wrapper = mount(ContactItem, { propsData: { contact: testContact }, store, localVue })

        const avatar = wrapper.findComponent('.contact-image-avatar')
        expect(avatar.exists()).toBe(true)

        const name = wrapper.findComponent('.contact-name')
        expect(name.exists()).toBe(true)
        expect(name.text() == testContact.name.last).toBe(true)
    })

    it('renders component when contact prop is missing last name', () => {
        let testContact = {
            "name": {
                "title": "Ms",
                "first": "Friedhilde",
                // "last": "Meißner"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/87.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/87.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/87.jpg"
            }
        }
        const wrapper = mount(ContactItem, { propsData: { contact: testContact }, store, localVue })

        const avatar = wrapper.findComponent('.contact-image-avatar')
        expect(avatar.exists()).toBe(true)

        const name = wrapper.findComponent('.contact-name')
        expect(name.exists()).toBe(true)
        expect(name.text() == testContact.name.first).toBe(true)
    })

    // Correct Prop Render
    it('renders component when contact prop is present correctly', () => {
        let testContact = {
            "name": {
                "title": "Ms",
                "first": "Friedhilde",
                "last": "Meißner"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/87.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/87.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/87.jpg"
            }
        }
        const wrapper = mount(ContactItem, { propsData: { contact: testContact }, store, localVue })

        const avatar = wrapper.findComponent('.contact-image-avatar')
        expect(avatar.exists()).toBe(true)

        const name = wrapper.findComponent('.contact-name')
        expect(name.exists()).toBe(true)
        expect(name.text() == testContact.name.first + " " + testContact.name.last).toBe(true)
    })

    // Click Contact
    it('click on Contact card sets the store state and changes route', async () => {
        let testContact = {
            "name": {
                "title": "Ms",
                "first": "Friedhilde",
                "last": "Meißner"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/87.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/87.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/87.jpg"
            }
        }
        const wrapper = mount(ContactItem, { propsData: { contact: testContact }, store, localVue, router })

        const card = wrapper.find('.contact-button')
        await card.trigger('click')

        expect(store.state.selectedContact == testContact).toBe(true)

        var url = window.location.href.split('/')
        expect(url[url.length-1]).toBe('details')
    })

})