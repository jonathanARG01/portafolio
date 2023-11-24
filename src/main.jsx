import React from 'react';
import ReactDOM from 'react-dom/client';

import { LanguageProvider } from './LanguageContext.jsx';

import App from './App.jsx';
import './reset.css';
import './style.css';



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<LanguageProvider>
			<App />
		</LanguageProvider>
	</React.StrictMode>,
)
