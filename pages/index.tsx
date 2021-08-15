import React from 'react';
import styles from '../styles/Home.module.css'

const Home = () => {
  const [theme, setTheme] = React.useState('light')

  const toggleTheme = () => {
    const toggled = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', toggled)
    setTheme(toggled)
  };

  // causes flickering
  // React.useEffect(() => {
  //   setTheme(localStorage.getItem('theme') || 'light')
  // }, [])

  // fixes flickering
  React.useLayoutEffect(() => {
    setTheme(localStorage.getItem('theme') || 'light')
  }, [])

  return (
    <div className={`${styles[theme]} ${styles.container}`}>
      <h1 className={styles.title}>Welcome World!</h1>
      <button className={styles.button} onClick={toggleTheme}>
        Toggle theme
      </button>
    </div>
  )
}

export default Home
