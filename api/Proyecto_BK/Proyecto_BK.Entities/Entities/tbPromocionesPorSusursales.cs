﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Proyecto_BK.Entities
{
    public partial class tbPromocionesPorSusursales
    {
        public int PPSu_Id { get; set; }
        public int? Prom_Id { get; set; }
        public int? Sucu_Id { get; set; }
        public int? PPSu_Usua_Creacion { get; set; }
        public DateTime? PPSu_Fecha_Creacion { get; set; }
        public int? PPSu_Usua_Modifica { get; set; }
        public DateTime? PPSu_Fecha_Modifica { get; set; }
        public bool? PPSu_Estado { get; set; }

        public string Prom_Descripcion { get; set; }
        public string Sucu_Descripcion { get; set; }
        public string Muni_Codigo { get; set; }

        public virtual tbPromociones Prom { get; set; }
        public virtual tbSucursales Sucu { get; set; }
    }
}