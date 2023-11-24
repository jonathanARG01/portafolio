// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Menu       from './components/Menu/Menu';

// Sections
import Main       from './sections/Main/Main';
import About      from './sections/About/About';
import Skills     from './sections/Skills/Skills';
import Experience from './sections/Experience/Experience';
import Portfolio  from './sections/Portfolio/Portfolio';
import Contact    from './sections/Contact/Contact';



function App() {
  
	return (

		<>

			<Menu />
			<Main />
			<About />
			<Skills />
			<Experience />
			<Portfolio />
			<Contact />

		</>
	
	)

}



export default App
