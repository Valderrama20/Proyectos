import style from './Nav.module.css'

function Nav() {
return<div className={style.container}>
    <h1>Lobe</h1>
    <div className={style.containerFont}>
        <font>Overview</font>
        <font>Examples</font>
        <font>Tour</font>
        <font>Blog</font>
        <font>Help</font>
    </div>
      <button>Descargar</button>
</div>
}


export default Nav