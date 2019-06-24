const initState = {
  projects: [
    {id: '1', title: 'Organize documents', content: 'Ask Per and Katja to get the important documents and organize them yourself'},
    {id: '2', title: 'Call the client', content: 'Ask Omer to call and fix the meeting with clients'},
    {id: '3', title: 'Inform the board members', content: 'Write an email explaining the result'}
  ]
};

const projectReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    case 'DELETE_PROJECT':
      console.log('deleted project', action.project);
      return state;
    case 'DELETE_PROJECT_ERROR':
      console.log('delete project error', action.err);
      return state; 
    default:
      return state;
  }
}

export default projectReducer;