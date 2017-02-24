import React from 'react';
import { mount, shallow } from 'enzyme';
import { renderComponent, expect } from '../testHelper';
import SearchBar from '../../src/container/SearchBar';


describe('SearchBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = renderComponent(SearchBar);
  });

  it('has input tag', () => {
    expect(wrapper.find('input')).to.exist;
  });

  it('has input tag', () => {
    expect(wrapper.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      wrapper.find('input').simulate('change', 'new search')
    });

    it('shows text in input ', () => {
      expect(wrapper.find('input')).to.have.value('new search')
    });

  });

});