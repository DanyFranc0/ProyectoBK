﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace Proyecto_BK.Entities
{
    public partial class tbPaquetes
    {
        public tbPaquetes()
        {
            tbPaquetesPorComidas = new HashSet<tbPaquetesPorComidas>();
        }

        public int Paqe_Id { get; set; }
        public string Paqe_Descripcion { get; set; }
        public decimal? Paqe_Precio { get; set; }
        public string Paqe_Imagen { get; set; }
        public int? Paqe_Usua_Creacion { get; set; }
        public DateTime? Paqe_Fecha_Creacion { get; set; }
        public int? Paqe_Usua_Modifica { get; set; }
        public DateTime? Paqe_Fecha_Modifica { get; set; }
        public bool? Paqe_Estado { get; set; }

        public virtual tbUsuarios Paqe_Usua_CreacionNavigation { get; set; }
        public virtual tbUsuarios Paqe_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbPaquetesPorComidas> tbPaquetesPorComidas { get; set; }
    }
}