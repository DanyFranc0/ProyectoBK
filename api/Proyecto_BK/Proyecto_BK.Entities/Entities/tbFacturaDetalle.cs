﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Proyecto_BK.Entities
{
    public partial class tbFacturaDetalle
    {
        public int FaDe_Id { get; set; }
        public int? Fact_Id { get; set; }
        public int? Prom_Id { get; set; }
        public int? Comb_Id { get; set; }
        public int? Paqe_Id { get; set; }
        public int? Bebi_Id { get; set; }
        public int? Post_id { get; set; }
        public int? Comp_Id { get; set; }
        public int? Alim_Id { get; set; }
        public int? FaDe_Cantidad { get; set; }
        public decimal? FaDe_Subtotal { get; set; }
        public int? FaDe_Usua_Creacion { get; set; }
        public DateTime? FaDe_Fecha_Creacion { get; set; }
        public int? FaDe_Usua_Modifica { get; set; }
        public DateTime? FaDe_Fecha_Modifica { get; set; }
        public bool? FaDe_Estado { get; set; }

        public virtual tbAlimentos Alim { get; set; }
        public virtual tbBebidas Bebi { get; set; }
        public virtual tbCombosPersonales Comb { get; set; }
        public virtual tbComplementos Comp { get; set; }
        public virtual tbUsuarios FaDe_Usua_CreacionNavigation { get; set; }
        public virtual tbUsuarios FaDe_Usua_ModificaNavigation { get; set; }
        public virtual tbFactura Fact { get; set; }
        public virtual tbPaquetes Paqe { get; set; }
        public virtual tbPostres Post { get; set; }
    }
}