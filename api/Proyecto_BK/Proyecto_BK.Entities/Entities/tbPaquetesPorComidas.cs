﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Proyecto_BK.Entities
{
    public partial class tbPaquetesPorComidas
    {
        public int PaCo_Id { get; set; }
        public int? Paqe_Id { get; set; }
        public int? Bebi_Id { get; set; }
        public int? Post_id { get; set; }
        public int? Comp_Id { get; set; }
        public int? Alim_Id { get; set; }
        public int? PaCo_Usua_Creacion { get; set; }
        public DateTime? PaCo_Fecha_Creacion { get; set; }
        public int? PaCo_Usua_Modifica { get; set; }
        public DateTime? PaCo_Fecha_Modifica { get; set; }
        public bool? PaCo_Estado { get; set; }

        public virtual tbAlimentos Alim { get; set; }
        public virtual tbBebidas Bebi { get; set; }
        public virtual tbComplementos Comp { get; set; }
        public virtual tbUsuarios PaCo_Usua_CreacionNavigation { get; set; }
        public virtual tbUsuarios PaCo_Usua_ModificaNavigation { get; set; }
        public virtual tbPaquetes Paqe { get; set; }
        public virtual tbPostres Post { get; set; }
    }
}