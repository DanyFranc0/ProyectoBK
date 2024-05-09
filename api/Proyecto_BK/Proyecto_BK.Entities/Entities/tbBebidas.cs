﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Proyecto_BK.Entities
{
    public partial class tbBebidas
    {
        public tbBebidas()
        {
            tbCombosPersonales = new HashSet<tbCombosPersonales>();
            tbFacturaDetalle = new HashSet<tbFacturaDetalle>();
            tbPaquetesPorComidas = new HashSet<tbPaquetesPorComidas>();
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

        public virtual tbUsuarios Bebi_Usua_CreacionNavigation { get; set; }
        public virtual tbUsuarios Bebi_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbCombosPersonales> tbCombosPersonales { get; set; }
        public virtual ICollection<tbFacturaDetalle> tbFacturaDetalle { get; set; }
        public virtual ICollection<tbPaquetesPorComidas> tbPaquetesPorComidas { get; set; }
        public virtual ICollection<tbPromocionesPorComidas> tbPromocionesPorComidas { get; set; }
    }
}