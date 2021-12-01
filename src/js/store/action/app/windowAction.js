import { device } from '../../../util';

export const windowAction = { 
    setDevice,
}

function setDevice(value) { 
  
    return dispatch => { 
       
        const { height, width } = value;
        let setDevice;

        if (width <= 350) {
            setDevice = device[350];
        }
        else if (width <= 600) {
            setDevice = device[600];
        }
        else if (width <= 768) {
            setDevice = device[768];
        }
        else if (width <= 992) {
            setDevice = device[992];
        }
        else if (width > 992) {
            setDevice = device[1200];
        }
        
        dispatch({ type: 'setDevice', value: setDevice });
    };
} 