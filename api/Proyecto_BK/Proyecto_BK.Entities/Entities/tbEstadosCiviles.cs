﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Proyecto_BK.Entities
{
    public partial class tbEstadosCiviles
    {
        public tbEstadosCiviles()
        {
            tbClientes = new HashSet<tbClientes>();
            tbEmpleados = new HashSet<tbEmpleados>();
        }

        public int Esta_Id { get; set; }
        public string Esta_Descripcion { get; set; }
        public int Esta_Usua_Creacion { get; set; }
        public DateTime Esta_Fecha_Creacion { get; set; }
        public int? Esta_Usua_Modifica { get; set; }
        public DateTime? Esta_Fecha_Modifica { get; set; }

        public virtual tbUsuarios Esta_Usua_CreacionNavigation { get; set; }
        public virtual tbUsuarios Esta_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbClientes> tbClientes { get; set; }
        public virtual ICollection<tbEmpleados> tbEmpleados { get; set; }
    }
}