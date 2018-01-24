import { expect } from 'chai';
import { sinon, spy, mock ,stub ,assert} from 'sinon';
import { mount, render, shallow } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


global.expect = expect;
global.sinon = sinon;
global.spy = spy;
global.mock = mock;
global.stub = stub;
global.assert = assert;

global.mount = mount;
global.render = render;
global.shallow = shallow;