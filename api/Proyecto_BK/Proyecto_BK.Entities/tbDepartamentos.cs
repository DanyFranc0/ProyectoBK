﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace Proyecto_BK.Entities
{
    public partial class tbDepartamentos
    {
        public tbDepartamentos()
        {
            tbMunicipios = new HashSet<tbMunicipios>();
        }

        public string Dept_Codigo { get; set; }
        public string Dept_Descripcion { get; set; }
        public int Dept_Usua_Creacion { get; set; }
        public DateTime Dept_Fecha_Creacion { get; set; }
        public int? Dept_Usua_Modifica { get; set; }
        public DateTime? Dept_Fecha_Modifica { get; set; }

        public virtual tbUsuarios Dept_Usua_CreacionNavigation { get; set; }
        public virtual tbUsuarios Dept_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbMunicipios> tbMunicipios { get; set; }
    }
}