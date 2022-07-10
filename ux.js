/* "use strict"
window.onload=()=> {
*/
	let c = [
			{
				id: 1,
				name: "",
				surname: "Ivanova",
				lastname: "Konstantinovna",
				tel: "+4 8134 385123",
				company: "Hlebopek",
				addr: "Vipori, 10 part siezd, apt.72",
				email: "k.ivan@sibir.su"
			}, {
				id: 2,
				name: "Serge",
				surname: "Ustinov",
				lastname: "Vasilievich",
				tel: "+67 8134 385123",
				company: "Kinolog",
				addr: "Sochi, 10 part siezd, apt.94",
				email: "s.ust@sibir.su"
			}, {
				id: 3,
				name: "Elena",
				surname: "Birzevaya",
				lastname: "Alexandrovna",
				tel: "+34 8134 385123",
				company: "Malyar",
				addr: "Vladivostok, 10 part siezd, apt.94",
				email: "h.birz@sibir.su"
			}, {
				id: 4,
				name: "Maria",
				surname: "Starovernaya",
				lastname: "Alexeevna",
				tel: "+54 8134 385123",
				company: "Militsioner",
				addr: "Kiselevsk, 10 part siezd, apt.94",
				email: "m.starov@sibir.su"
			}, {
				id: 5,
				name: "Anna",
				surname: "Lapushkina",
				lastname: "Olegovna",
				tel: "+7 8134 385123",
				company: "Stolovaya #1",
				addr: "Novosoborsk, 10 part siezd, apt.94",
				email: "a.lap@sibir.su"
			}
		]


	const cf = document.getElementById('contact_form'),
		cf_sect = cf.children[1].children,
		cf_save = document.querySelectorAll('#contact_form button')[0],
		// cf_del = document.querySelectorAll('#contact_form button')[1],
		cf_cnl = document.querySelectorAll('#contact_form button')[1],
		gm = document.getElementById('menu_general'),
		gm_init = document.getElementById('menu_btn'),
		gm_close = document.querySelector('#menu_general svg'),
		gm_add = document.querySelectorAll('#menu_general div')[0],
		gm_imp = document.querySelectorAll('#menu_general div')[1],
		gm_exp = document.querySelectorAll('#menu_general div')[2],
		sh = document.getElementById('shadow'),
		tab_body = document.querySelector('tbody'),
		tab_row_n = document.querySelector('thead tr').childElementCount,
		ava = '<svg width="25" height="25"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z"/></svg>',
		edit_btn = '<button>Правка</button>'
	// Helpers
	function hide() {
		for (let i in arguments)
			arguments[i].setAttribute('hidden', '')
	}
	function show() {
		for (let i in arguments)
			arguments[i].removeAttribute('hidden')
	}
	function clearCF() {
		for (let j in cf_sect)
			cf_sect[j].value = ''
	}
	// end Helpers
	
	// Sorting
	function sorting() {
		c.sort( (a,b)=>{
			let res = 0
			if (a.name.length !== 0 && b.name.length !== 0) {
				if (a.name > b.name)
					res = 1	 
				else if (a.name < b.name)
					res = -1
			}
			else { // if (a.surname.length !== 0 && b.surname.length !== 0) {
				if (a.surname > b.name)
					res = 1	 
				else if (a.surname < b.name)
					res = -1
			}
			return res;
		})
	}
	
	// General menu
	gm_init.onclick = ()=>
		show(gm, sh)
		
	gm_add.onclick =()=> {	// add contact
		show(cf)
		hide(gm)
		cf.firstElementChild.innerText = 'Новый контакт'
		save_c('insert')
	}
		//	gm_imp.onclick =()=> 	// import from JSON
		//	gm_exp.onclick =()=> 	// export to JSON

	gm_close.onclick =()=>	// close general menu
		hide(gm, sh)
	
	// print the Table
	function draw() {
		tab_body.innerHTML = ''
		c.forEach(rec => {
			const t = {
				row: document.createElement('tr'),
				data: new Array
			}
			function fill_row() {
				for (let i in arguments)
					t.data[i].innerHTML = arguments[i]
			}
			for (let i=0; i<tab_row_n; i++)
				t.data[i] = document.createElement('td')

			for (let i=0; i<tab_row_n; i++) {
				fill_row(
					rec.id,
					ava,
					rec.name +' '+ rec.lastname +' '+ rec.surname,
					rec.tel,
					rec.company,
					rec.addr,
					rec.email,
					edit_btn
				)
				t.row.appendChild( t.data[i] )
			}
			tab_body.appendChild( t.row )
		})
	}

	function assignAction() {
		const rows = document.querySelectorAll('tbody tr'),
		   	btn = document.querySelectorAll('tbody button')
		for( let i=0; i<rows.length; i++ ) {
			btn[i].onclick= (ev)=>	{
				show(cf,/* cf_del, */ sh)
				cf.firstElementChild.innerText = 'Правка контакта'
				const ind = parseInt(ev.target.parentElement.parentElement.firstElementChild.innerText),
						choice = c.find( ({id})=> id === ind )
				
				for (let j in cf_sect)
					cf_sect[j].value = Object.values(choice)[j]

				save_c('alter')
			}

			rows[i].onmouseover= ()=>	// edit button, focus
				btn[i].style.visibility = 'visible'
			rows[i].onmouseout = ()=>		// edit button, out of focus
				btn[i].style.visibility = 'hidden'
		}
	}
	
	// Contact form
	function save_c(flag) {
		cf_save.onclick= ()=> {
			if (flag === 'insert') {
				
			}
			else if( flag === 'alter' ) {
				const ind = parseInt(cf_sect[0].value)
				console.log( c[ind].id)
				choice = c.find( ({id})=> id === ind )
				console.log(choice)
				c[ind].name 	= cf_sect[1].value
				c[ind].surname = cf_sect[2].value
				c[ind].lastname= cf_sect[3].value
				c[ind].tel 		= cf_sect[4].value
				c[ind].company = cf_sect[5].value
				c[ind].addr		= cf_sect[6].value
				c[ind].email 	= cf_sect[7].value
			}
			hide(cf, sh)
			sorting()
			draw()
			assignAction()
		}
	}

	/* cf_del.onclick= ()=> {	// delete
		const ind = parseInt(cf_sect[0].value)
		for( let i in c ) {
			if( c[i].id === ind)
				delete c[i]
		}
		draw()
		assignAction()		// throws error after 2nd form
		hide(cf, sh)
		clearCF()
	}
	*/
	cf_cnl.onclick= ()=> {		// cancel
		hide(cf, /* cf_del,*/ sh)
		clearCF()
	}
	
	sh.onclick = ()=>	{
		hide(gm,cf,sh)
		clearCF()
	}
	

	sorting()
	draw()
	assignAction()
	



// }