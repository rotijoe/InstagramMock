export default {
  main: {
    backgroundColor: 'rgb(243 243 243)',
    border: '1px solid #e6e6e6',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',
    maxWidth: '935px',
    height: '500px',
    margin: '16px auto',
    width: 'calc(100% - 40px)',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'flex-start',
  },

  image: {
    order: '1',
    flex: '1 0 60%',
    alignSelf: 'center',
  },

  text: {
    order: '2',
    flex: '1 0 38%',
    alignSelf: 'flex-start',
    height: '100%',
    paddingLeft: '2%',
    backgroundColor: '#fff',
  },
};
