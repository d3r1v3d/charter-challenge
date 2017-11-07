import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import RepoListRow from './RepoListRow';

function setup(saving) {


  return shallow(<RepoListRow {...props} />);
}

describe('RepoList via Enzyme', () => {
  it('renders form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('h2').length).toBe(25);
  });
});
