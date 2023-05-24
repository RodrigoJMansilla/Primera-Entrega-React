import styles from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div style={{display: "flex", justifyContent:"flex-start", gap: "60px"}}>
          <h3 className={styles.logo}>Logo</h3>
          <div className={styles.contenedorBotones}>
              <button className={styles.botones}>Todos</button>
              <button className={styles.botones}>Cuadros</button>
              <button className={styles.botones}>Escultura</button>
              <button className={styles.botones}>Blog</button>
          </div>
        </div>
        <h3>Aca va el widget</h3>
    </nav>
  )
}


