const initState = {
  projects: [
    {id: '1', title: 'Organize documents', content: 'Ask Per and Katja to get the important documents and organize them yourself'},
    {id: '2', title: 'Call the client', content: 'Ask Per and Katja to get the important documents and organize them yourself'},
    {id: '3', title: 'Inform the board members', content: 'Write an email explaining the result'}
  ]
};

const projectReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT':
      //write here
  }
  return state;
}

export default projectReducer;