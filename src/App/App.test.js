// import '../../setupTests'

import React from 'react'
import { shallow, render } from 'enzyme'
import App from './App'


it('renders without crashing', () => {
    const wraper = shallow(<App />);
    expect(wraper).toBeDefined();
});

it("should render with App-header className", () => {
    
    const wraper = render(< App />);
    expect(wraper.hasClass('App-header')).toBe(true);

});

it("should render with App-footer className", () => {
    
    const wraper = render(< App />);
    expect(wraper.hasClass('App-footer')).toBe(true);

});

it("should render with App-bdy className", () => {
    
    const wraper = render(< App />);
    expect(wraper.hasClass('App-body')).toBe(true);

});