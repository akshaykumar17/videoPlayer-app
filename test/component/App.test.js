import React from 'react';
import { shallow } from 'enzyme';
import { renderComponent, expect } from '../testHelper';
import App from '../../src/components/App';

it('renders without crashing', () => {
  shallow(<App />);
});

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = renderComponent(App);
  });

  it('shows some text', () => {
    expect(wrapper).to.contain('hi');
  });

  it('has SearchBar component', () => {
    expect(wrapper.find('.search')).to.exist;
  });

  it('has VideoPlayer component', () => {
    expect(wrapper.find('.videoplayer')).to.exist;
  });

  it('has VideoList component', () => {
    expect(wrapper.find('.video-list')).to.exist;
  });

});