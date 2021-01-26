import React, {Component} from 'react';
import imagenBlog from '../imagenes/veilizarivanov40lycan.jpg';


class Blog extends Component{

        render(){

            

            let estiloTarjetas = [
                { 
                    imagen: "../imagenes/veilizarivanov40lycan.jpg", 
                    titulo: "Card",
                    texto: "caaaaaaaaaaaaaaaaaaa",
                    botonTexto: "Go somewhere",
                    botonEnlace:  "https://www.google.es/", 
                 },
                 { 
                    imagen: './imagenes/toimetaja-tolkeburoo-KQfxVDHGCUg-unsplash-1024x684.jpg',
                    titulo: "Titulo",
                    texto: "Cosas.",
                    botonTexto: "ir a algun lado",
                    botonEnlace:  "#", 
                 },
                 { 
                    imagen: './imagenes/toimetaja-tolkeburoo-KQfxVDHGCUg-unsplash-1024x684.jpg',
                    titulo: "Titulo 2",
                    texto: "Cosas.2",
                    botonTexto: "ir a algun lado 2",
                    botonEnlace:  "#", 
                 },
            ];
              
            //SE DEBE METER TODO EN UN ARRAY  K ES EL K SE RETORNA EN EL RETURN DE ABAJO, ADEMAS DE DARLE UNA KEY UNICA AL ELEMENTO PADRE 
            let items = [];
            for (const [i, tarjeta] of estiloTarjetas.entries()) {           
               items.push(
                <div className="col tarjetas" key={i}>
                    <div className="card">
                        <img src={imagenBlog} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{tarjeta.titulo}</h5>
                            <p className="card-text">{tarjeta.texto}</p>
                            <a href={tarjeta.botonEnlace} className="btn btn-primary">{tarjeta.botonTexto}</a>
                        </div>
                    </div>
                </div>
               )
              }

            return(

                <div className="row">
                    {items}
                </div>
                                    
            );
        }
}

export default Blog;
