let entities, n, c = [
      {
         id: 1,
         name: "Celestina",
         surname: "Stolbovaya",
         lastname: "",
         tel: "+4 8134 385123",
         company: "Hlebopek",
         addr: "Vipori",
         email: "k.ivan@sibir.su"
      }, {
         id: 2,
         name: "",
         surname: "Zorro",
         lastname: "",
         tel: "+67 8134 385123",
         company: "Kinolog",
         addr: "Sochi",
         email: "alejandro@spb.ru"
      }, {
         id: 3,
         name: "Elena",
         surname: "Birzevaya",
         lastname: "Alexandrovna",
         tel: "+34 8134 385123",
         company: "Malyar",
         addr: "Vladivostok",
         email: "h.birz@sibir.su"
      }, {
         id: 4,
         name: "Maria",
         surname: "Starovernaya",
         lastname: "Alexeevna",
         tel: "+54 8134 385123",
         company: "Militsioner",
         addr: "Kiselevsk",
         email: "m.starov@sibir.su"
      }, {
         id: 5,
         name: "Anna",
         surname: "Deremina",
         lastname: "Olegovna",
         tel: "+7 8134 385123",
         company: "Deklarant",
         addr: "Izborsk",
         email: "a.der@sibir.su"
      }, {
         id: 6,
         name: "Oleg",
         surname: "Veshiy",
         lastname: "",
         tel: "+7",
         company: "Regent",
         addr: "Kiev",
         email: "o.vesh@sibir.su"
      }, {
         id: 7,
         name: "Aleksandr",
         surname: "Nevskiy",
         lastname: "",
         tel: "+7",
         company: "Polkovodets",
         addr: "Pskov",
         email: "a.nev@pskov.su"
      }, {
         id: 8,
         name: "Natalia",
         surname: "",
         lastname: "Sergeevna",
         tel: "+7 8134 385123",
         company: "BIM",
         addr: "Leningrad",
         email: "n@vostok.su"
      }, {
         id: 9,
         name: "Uriy",
         surname: "Lapushkin",
         lastname: "Olegovich",
         tel: "+7 8134 385123",
         company: "Deklarant",
         addr: "Peterburg",
         email: "u.lap@spb.ru"
      }, {
         id: 10,
         name: "Parsuna",
         surname: "",
         lastname: "is drawaing in icon. ",
         tel: "+7 8134 385123",
         company: "Stroitel",
         addr: "Vsevolozsk",
         email: "p.hope@vsev.su"
      }, {
         id: 11,
         name: "Maria",
         surname: "Zhukova",
         lastname: "Borisovna",
         tel: "+7 813 385123",
         company: "Uchitel",
         addr: "Moskva",
         email: "m.zhukova@len.ru"
      }, {
         id: 12,
         name: "Elestina",
         surname: "Voskresenskaya",
         lastname: "Aleksandrovna",
         tel: "+4 8134 385123",
         company: "Konevod",
         addr: "Elista",
         email: "e.voskr@sibir.su"
      }, {
         id: 13,
         name: "",
         surname: "Zorro",
         lastname: "",
         tel: "+27 8134 385123",
         company: "Mushketer",
         addr: "Sahalin",
         email: "a.sanz@sibir.su"
      }
   ]

// Helpers
function hide() {
   for (const i in arguments)
      arguments[i].setAttribute('hidden', '')
   for (const j in cf_inp)
      cf_inp[j].value = ''
}
function show() {
   for (const i in arguments)
      arguments[i].removeAttribute('hidden')
}
function apply_c(r) {
   r = parseInt(r)
   c[r] = {
      id:       r,
      name:		 cf_inp[1].value,
      surname:  cf_inp[2].value,
      lastname: cf_inp[3].value,
      tel:		 cf_inp[4].value,
      company:  cf_inp[5].value,
      addr: 	 cf_inp[6].value,
      email:	 cf_inp[7].value
   }
}
function qs(s) {
   return document.querySelector(s)
}
function qsa(a) {
   return document.querySelectorAll(a)
}
// end Helpers

const
   cf		   = qs('#contact_form'),
   cf_inp   = cf.children[1].children,   // all input fields
   cf_save  = qs('#contact_form button:nth-child(1)'),  // save
   cf_cnl   = qs('#contact_form button:nth-child(2)'),   // cancel
   gm       = qs('#menu_general'),
   gm_init  = qs('#menu_btn'),
   
   gm_add   = qs('#menu_general area[alt="top sector"]'),
   gm_exp   = qs('#menu_general area[alt="right sector"]'),
   gm_imp   = qs('#menu_general area[alt="left sector"]'),
   gm_close = qs('#menu_general area[alt="bottom sector"]'),
   
   gm_top_img = qs('#menu_general img[alt=top]'),
   gm_rgt_img = qs('#menu_general img[alt=right]'),
   gm_btm_img = qs('#menu_general img[alt=bottom]'),
   gm_lft_img = qs('#menu_general img[alt=left]'),
   
   sh		   = qs('#shadow'),
   tabula = qs('main'),
   tab_col_n= qs('header .columns').childElementCount,
   sch 	   = qs('#search'),
   enty_dfl = 9,
   enty_step= 2,
   ava		= '<svg width="25" height="25"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z"/></svg>',
   edit_btn = '<button>Правка</button>'
   

function init(enty) {
   if( typeof(enty) === 'number' )        // mayor way
      n = c
   else if( typeof(enty) === 'object' )	// search way
      n = enty
   
   // Sorting the object
   n.sort( (a,b)=>{
      let res = 0
      if (a.name.length !== 0 && b.name.length !== 0) {
         if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase())
            res = 1	 
         else if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase())
            res = -1
      }
      else if (a.surname.length !== 0 && b.name.length !== 0) {
         if (a.surname.toLocaleLowerCase() > b.name.toLocaleLowerCase() )
            res = 1	 
         else if (a.surname.toLocaleLowerCase() < b.name.toLocaleLowerCase())
            res = -1
      }
      else if (a.name.length !== 0 && b.surname.length !== 0) {
         if (a.name.toLocaleLowerCase() > b.surname.toLocaleLowerCase() )
            res = 1	 
         else if (a.name.toLocaleLowerCase() < b.surname.toLocaleLowerCase())
            res = -1
      }
      return res;
   })

   // (re) Drawing the table
   tabula.innerHTML = ''
   n.forEach(rec => {
      const t = {
         row: document.createElement('section'),
         data: new Array
      }
      function fill_row() {
         for (const i in arguments)
            t.data[i].innerHTML = arguments[i]
      }
      for (let j=0; j<tab_col_n; j++)
         t.data[j] = document.createElement('div')

      for (let j=0; j<tab_col_n; j++) {
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
         t.row.appendChild( t.data[j] )
         t.row.className = 'columns'
      }
      if ( rec.id <= enty || rec.id <= enty_dfl)
         tabula.appendChild( t.row )
   })

   const rows = qsa('main section'),    // Action edit btn for each row
         btn = qsa('main button')
   for( let i=0; i<rows.length; i++ ) {
      btn[i].onclick= (ev)=>	{
         show(cf, sh)
         location.href += "#contact_form"
         cf.firstElementChild.innerText = 'Правка контакта'
         const ind = parseInt(ev.target.parentElement.parentElement.firstElementChild.innerText),
               choice = c.find( ({id})=> id === ind )
         
         for (const j in cf_inp)
            cf_inp[j].value = Object.values(choice)[j]

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
      if (cf_inp[0].value.length > 0 || cf_inp[1].value.length > 0) {   // check if Name or Surname is set (in form)
         if (flag === 'insert') {
            let next_i = 0;
            for (var i in c) {         
               if ( c[i].id >= next_i )
                  next_i = c[i].id +1   // set next id value for Object
            }
            apply_c(next_i)
            entities += 1
         }
         else if( flag === 'alter' ) { 
               const ind = parseInt(cf_inp[0].value),
                     res = c.findIndex(({id})=> id === ind)
               apply_c( res )
         }
         init(entities)
         hide(cf, sh)   
      }
      else
         alert('Поле Фамилия или Имя обязательны при заполнении.')
   }
}
cf_cnl.onclick= ()=>		// cancel
   hide(cf, sh)
sh.onclick = ()=>
   hide(gm, cf, sh)


// General menu
gm_init.onclick = ()=>
   show(gm, sh)

gm_add.onmouseover= ()=>
   show(gm_top_img)
gm_add.onmouseout= ()=>
   hide(gm_top_img)
gm_top_img.onclick= ()=> {	// add contact
   show(cf)
   location.href +="#contact_form"
   hide(gm)
   cf.firstElementChild.innerText = 'Новый контакт'
   save_c('insert')
}

gm_imp.onmouseover= ()=>
   show(gm_lft_img)
gm_imp.onmouseout= ()=>
   hide(gm_lft_img)
gm_exp.onmouseover= ()=>
   show(gm_rgt_img)
gm_exp.onmouseout= ()=>
   hide(gm_rgt_img)

//	gm_lft_img.onclick =()=> 	// import from JSON
//	gm_rgt_img.onclick =()=> 	// export to JSON

gm_close.onmouseover= ()=>
   show(gm_btm_img)
gm_close.onmouseout= ()=>
   hide(gm_btm_img)
gm_btm_img.onclick =()=>
   hide(gm, sh)


init(entities = enty_dfl)


window.onscroll= async ()=> {
   const max_H 	= window.innerHeight /4
   if( window.scrollY >= max_H ) {
      let p = new Promise( (resolve, reject) =>
               setTimeout( () => resolve(), 1200)
              )
      await p
      init(entities += enty_step)
   }
}


sch.onkeypress= ()=> {
   const s = sch.value.toLocaleLowerCase(),
      found =
         c.filter(e => {
            if (
                e.name.    toLocaleLowerCase().includes(s) ||
                e.surname. toLocaleLowerCase().includes(s) ||
                e.lastname.toLocaleLowerCase().includes(s) ||
                e.addr.    toLocaleLowerCase().includes(s) ||
                e.company. toLocaleLowerCase().includes(s) ||
                e.email.   toLocaleLowerCase().includes(s) ||
                e.tel.     toLocaleLowerCase().includes(s)
               )
            return e
   })
   init(found)
}