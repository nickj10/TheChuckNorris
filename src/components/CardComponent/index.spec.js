/**
 * Testing our card component
 */

import { shallowMount } from '@vue/test-utils'
import CardComponent from './'

const myTitle = 'My title'
const myContent = 'My content'

const factory = propsData => {
    return shallowMount(CardComponent, {
        slots: {
            title: myTitle,
            content: myContent,
        },
    })
}

describe('CardComponent', () => {
    let wrapper
    beforeEach(() => {
        wrapper = factory({ title: true, content: true })
    })

    it('should render a title', () => {
        expect(wrapper.find('.card-component__title').text()).toBe(
            myTitle
        )
    })
    it('should render a content', () => {
        expect(wrapper.find('.card-component__content').text()).toBe(
            myContent
        )
    })
})