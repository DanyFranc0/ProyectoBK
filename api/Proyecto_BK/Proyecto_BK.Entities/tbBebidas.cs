﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace Proyecto_BK.Entities
{
    public partial class tbBebidas
    {
        public tbBebidas()
        {
            tbCombo = new HashSet<tbCombo>();
            tbPaquetesPorComidas = new HashSet<tbPaquetesPorComidas>();
            tbPromocionesPorBebidas = new HashSet<tbPromocionesPorBebidas>();
            tbPromocionesPorComidas = new HashSet<tbPromocionesPorComidas>();
        }

        public int Bebi_Id { get; set; }
        public string Bebi_Descripcion { get; set; }
        public decimal? Bebi_Precio { get; set; }
        public string Bebi_Imagen { get; set; }
        public int? Bebi_Usua_Creacion { get; set; }
        public DateTime? Bebi_Fecha_Creacion { get; set; }
        public int? Bebi_Usua_Modifica { get; set; }
        public DateTime? Bebi_Fecha_Modifica { get; set; }
        public bool? Bebi_Estado { get; set; }
        [NotMapped]
        public string Usua_Creacion { get; set; }
        [NotMapped]
        public string Usua_Modifica { get; set; }

        [NotMapped]

        public string text { get; set; }
        [NotMapped]
        public int value { get; set; }
        [NotMapped]

        public string image { get; set; }
        [NotMapped]
        public decimal precio { get; set; }

        public virtual tbUsuarios Bebi_Usua_CreacionNavigation { get; set; }
        public virtual tbUsuarios Bebi_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbCombo> tbCombo { get; set; }
        public virtual ICollection<tbPaquetesPorComidas> tbPaquetesPorComidas { get; set; }
        public virtual ICollection<tbPromocionesPorBebidas> tbPromocionesPorBebidas { get; set; }
        public virtual ICollection<tbPromocionesPorComidas> tbPromocionesPorComidas { get; set; }
    }
}