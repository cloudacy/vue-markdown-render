import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld.vue', () => {
	it('renders the passed message prop', async () => {
		const wrapper = shallowMount(HelloWorld, { props: { msg: 'Initial Message' } })
		expect(wrapper.find('h1').text()).toBe('Initial Message')

		await wrapper.setProps({ msg: 'Updated Message' })
		expect(wrapper.find('h1').text()).toBe('Updated Message')
	});

	it('renders static sections like docs links', () => {
		const wrapper = shallowMount(HelloWorld, { props: { msg: 'Static test' } })

		expect(wrapper.text()).toContain('Recommended IDE setup:')
		expect(wrapper.text()).toContain('See README.md for more information.')
		expect(wrapper.text()).toContain('Edit components/HelloWorld.vue to test hot module replacement.')

		// check that key links exist
		const links = wrapper.findAll('a')
		expect(links.length).toBeGreaterThan(0)
		expect(links[0].attributes('href')).toBe('https://code.visualstudio.com/')
	});

	it('increments count when button is clicked', async () => {
		const wrapper = shallowMount(HelloWorld, {
			props: { msg: 'Click test' },
		})

		const button = wrapper.get('button')
		expect(button.text()).toContain('count is: 0')

		// simulate click
		await button.trigger('click')
		expect(button.text()).toContain('count is: 1')
	});
});
