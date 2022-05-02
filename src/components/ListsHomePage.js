import VerticalList from './VerticalList'
import '../styles/homepage-styles.scss'

const ListsHomePage = ({ popular, topRated }) => {

  return (
    <div className="lists-homepage-container">
      <VerticalList title='Popular movies' movies={popular} />
      <VerticalList title='Best rated movies' movies={topRated} />

    </div>
  )
}

export default ListsHomePage;