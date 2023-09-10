const React = require('react')
const { Provider } = require('react-redux')

const { initStore } = require('./src/state/store')

exports.wrapRootElement = ({ element, location}) => {
    const store = initStore()

    console.log('❤️‍🔥 location', location);
    
    return <Provider store={store}>
        {element}
    </Provider>

}
