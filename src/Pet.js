import React from 'react';
export default function Pet({ name, type, text }){
    return React.createElement('div', {}, React.createElement('div', {}, [
        React.createElement('h3', {
            className: 'name'
        }, name),
        React.createElement('h4', {}, type),
        React.createElement('p', {}, text),
        React.createElement('hr', {})
    ]));
};
