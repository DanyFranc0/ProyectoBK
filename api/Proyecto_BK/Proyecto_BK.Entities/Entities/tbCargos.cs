﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Proyecto_BK.Entities
{
    public partial class tbCargos
    {
        public tbCargos()
        {
            tbClientes = new HashSet<tbClientes>();
            tbEmpleados = new HashSet<tbEmpleados>();
        }

        public int Carg_Id { get; set; }
        public string Carg_Descripcion { get; set; }
        public int? Carg_Usua_Creacion { get; set; }
        public DateTime? Carg_Fecha_Creacion { get; set; }
        public int? Carg_Usua_Modifica { get; set; }
        public DateTime? Carg_Fecha_Modifica { get; set; }
        public bool? Carg_Estado { get; set; }

        public virtual tbUsuarios Carg_Usua_CreacionNavigation { get; set; }
        public virtual tbUsuarios Carg_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbClientes> tbClientes { get; set; }
        public virtual ICollection<tbEmpleados> tbEmpleados { get; set; }
    }
}