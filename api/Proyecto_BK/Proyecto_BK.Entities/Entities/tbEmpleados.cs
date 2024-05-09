﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Proyecto_BK.Entities
{
    public partial class tbEmpleados
    {
        public tbEmpleados()
        {
            tbFactura = new HashSet<tbFactura>();
            tbSucursales = new HashSet<tbSucursales>();
            tbUsuarios = new HashSet<tbUsuarios>();
        }

        public int Empl_Id { get; set; }
        public string Empl_Identidad { get; set; }
        public string Empl_Nombre { get; set; }
        public string Empl_Apellido { get; set; }
        public string Empl_Sexo { get; set; }
        public string Empl_Correo { get; set; }
        public int? Esta_Id { get; set; }
        public string Muni_Codigo { get; set; }
        public int? Carg_Id { get; set; }
        public int? Empl_Usua_Creacion { get; set; }
        public DateTime? Empl_Fecha_Creacion { get; set; }
        public int? Empl_Usua_Modifica { get; set; }
        public DateTime? Empl_Fecha_Modifica { get; set; }
        public bool? Empl_Estado { get; set; }

        public string Esta_Descripcion { get; set; }
        public string Muni_Descripcion { get; set; }
        public string Carg_Descripcion { get; set; }

        public virtual tbCargos Carg { get; set; }
        public virtual tbUsuarios Empl_Usua_CreacionNavigation { get; set; }
        public virtual tbUsuarios Empl_Usua_ModificaNavigation { get; set; }
        public virtual tbEstadosCiviles Esta { get; set; }
        public virtual tbMunicipios Muni_CodigoNavigation { get; set; }
        public virtual ICollection<tbFactura> tbFactura { get; set; }
        public virtual ICollection<tbSucursales> tbSucursales { get; set; }
        public virtual ICollection<tbUsuarios> tbUsuarios { get; set; }
    }
}