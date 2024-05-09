﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Proyecto_BK.Entities
{
    public partial class tbPromociones
    {
        public tbPromociones()
        {
            tbPromocionesPorComidas = new HashSet<tbPromocionesPorComidas>();
            tbPromocionesPorSusursales = new HashSet<tbPromocionesPorSusursales>();
        }

        public int Prom_Id { get; set; }
        public string Prom_Descripcion { get; set; }
        public decimal? Prom_Precio { get; set; }
        public string Prom_Imagen { get; set; }
        public string Prom_Dia { get; set; }
        public int? Prom_Usua_Creacion { get; set; }
        public DateTime? Prom_Fecha_Creacion { get; set; }
        public int? Prom_Usua_Modifica { get; set; }
        public DateTime? Prom_Fecha_Modifica { get; set; }
        public bool? Prom_Estado { get; set; }

        public virtual tbUsuarios Prom_Usua_CreacionNavigation { get; set; }
        public virtual tbUsuarios Prom_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbPromocionesPorComidas> tbPromocionesPorComidas { get; set; }
        public virtual ICollection<tbPromocionesPorSusursales> tbPromocionesPorSusursales { get; set; }
    }
}