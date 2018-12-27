import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter:new EnzymeAdapter()});
const setup = (props={},state = null) => {
  return shallow(<App {...props} />);
}

const findByAttr = (wrapper,val)=>{
  return wrapper.find(`[data-test="${val}"]`);
}
it('renders without crashing', () => {
  const wrapper  = setup();
  const appComp = findByAttr(wrapper,'App');
  expect(appComp.length).toBe(1);
});

it('renders increment button ', () => {
  const wrapper  = setup();
  const button = findByAttr(wrapper,'inc-button');
  expect(button.length).toBe(1);
});

it('counter display working', () => {
  const wrapper  = setup();
  const counterDisplay = findByAttr(wrapper,'counter-display');
  expect(counterDisplay.length).toBe(1);
});

it('counter display increment working', () => {
  const wrapper  = setup();
  const counterDisplay =findByAttr(wrapper,'counter-display');
  expect(counterDisplay.length).toBe(1);
});