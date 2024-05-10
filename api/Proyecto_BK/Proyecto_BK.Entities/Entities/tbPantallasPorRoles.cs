﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace Proyecto_BK.Entities
{
    public partial class tbPantallasPorRoles
    {
        [NotMapped]
        public string Pant_Descripcion { get; set; }
        public int Paro_Id { get; set; }
        public int? Rol_Id { get; set; }
        public int? Pant_Id { get; set; }
        public int? Paro_Usua_Creacion { get; set; }
        public DateTime? Paro_Fecha_Creacion { get; set; }
        public int? Paro_Usua_Modifica { get; set; }
        public DateTime? Paro_Fecha_Modifica { get; set; }
        public bool? Paro_Estado { get; set; }

        public virtual tbPantallas Pant { get; set; }
        public virtual tbUsuarios Paro_Usua_CreacionNavigation { get; set; }
        public virtual tbUsuarios Paro_Usua_ModificaNavigation { get; set; }
        public virtual tbRoles Rol { get; set; }
    }
}