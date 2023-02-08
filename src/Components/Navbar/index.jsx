import styles from "./styles.module.css";

function Navbar() {
	return (
		<nav className={styles.nav_container}>
			<div className={styles.nav_left}>
				<a href="#home">Abhinaba Das</a>
			</div>
			<div className={styles.nav_right}>
				<a href="#about" className={styles.nav_link}>
					About Me
				</a>
				{/* <a href="#experience" className={styles.nav_link}>
					<span>02.</span>Experience
				</a> */}
				<a href="#work" className={styles.nav_link}>
					Projects
				</a>
				<a href="#contact" className={styles.nav_link}>
					Contact
				</a>
				{/* <button className={styles.nav_resume_btn}>Resume</button> */}
			</div>
		</nav>
	);
}

export default Navbar;
