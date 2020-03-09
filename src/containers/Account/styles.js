import Colors from '../../constants/colors';

const styles = {
  scrollViewStyle: {
    flex: 1,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: Colors.secondaryColor,
  },
  profileContainer: {
    backgroundColor: Colors.white,
    padding: 20,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 5,
  },
  profileImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },
  image: {
    borderRadius: 100,
    width: 70,
    height: 70,
    marginBottom: 20,
  },
  profileDetails: {
    justifyContent: 'center',
  },
  itemContainer: {
    backgroundColor: Colors.white,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 0.2,
  },
  itemText: {
    flex: 1,
    marginLeft: 20,
    fontSize: 12,
  },
};
export default styles;
