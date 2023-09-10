const React = require('react')
const { Provider } = require('react-redux')

const { initStore } = require('./src/state/store')

// not using the store right now, will need to set it up to get blog working
// exports.wrapRootElement = ({ element, location}) => {
//     const store = initStore()

    
//     return <Provider store={store}>
//         {element}
//     </Provider>

// }
