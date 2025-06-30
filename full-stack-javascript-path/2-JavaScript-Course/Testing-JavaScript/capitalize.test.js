// const capitalize=require('./capitalize');
import {capitalize} from "./capitalize";

test('Capitalize First letter',()=>{
    expect(capitalize('amal')).toBe('Amal');
});
