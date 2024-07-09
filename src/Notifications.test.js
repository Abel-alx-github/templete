import { shallow, render } from 'enzyme';
import { Notifications } from './Notifications';
import React from 'react';

describe("test Notifications component", () => { 
    
    it("should render without crashing", () => {
        
        const wraper = shallow(<Notifications />);

        expect(wraper).toBeDefined();
    });

    it("should render 3 list elements", () => {
        
        const wraper = render(<Notifications />);

        expect(wraper.find('li').length).toBe(3);
    });

    it("should render text", () => {
        
        const wraper = render(<Notifications />);
        
        expect(wraper.find('p').text()).toBe('Here is the list of notifications');
    });

});