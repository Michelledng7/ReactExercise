import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
return (
<div>
<div className = {styles.container}>
<Nav />
<main className= {styles.main}>
<Header/>
{children}</main>
</div>
</div>
)
}

export default Layout