﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace Proyecto_BK.Entities
{
    public partial class tbUsuarios
    {
        public tbUsuarios()
        {
            InverseUsua_Usua_CreacionNavigation = new HashSet<tbUsuarios>();
            tbAlimentosAlim_Usua_CreacionNavigation = new HashSet<tbAlimentos>();
            tbAlimentosAlim_Usua_ModificaNavigation = new HashSet<tbAlimentos>();
            tbBebidasBebi_Usua_CreacionNavigation = new HashSet<tbBebidas>();
            tbBebidasBebi_Usua_ModificaNavigation = new HashSet<tbBebidas>();
            tbCargosCarg_Usua_CreacionNavigation = new HashSet<tbCargos>();
            tbCargosCarg_Usua_ModificaNavigation = new HashSet<tbCargos>();
            tbClientesClie_Usua_CreacionNavigation = new HashSet<tbClientes>();
            tbClientesClie_Usua_ModificaNavigation = new HashSet<tbClientes>();
            tbCombosPersonalesComb_Usua_CreacionNavigation = new HashSet<tbCombosPersonales>();
            tbCombosPersonalesComb_Usua_ModificaNavigation = new HashSet<tbCombosPersonales>();
            tbComplementosComp_Usua_CreacionNavigation = new HashSet<tbComplementos>();
            tbComplementosComp_Usua_ModificaNavigation = new HashSet<tbComplementos>();
            tbDepartamentosDept_Usua_CreacionNavigation = new HashSet<tbDepartamentos>();
            tbDepartamentosDept_Usua_ModificaNavigation = new HashSet<tbDepartamentos>();
            tbEmpleadosEmpl_Usua_CreacionNavigation = new HashSet<tbEmpleados>();
            tbEmpleadosEmpl_Usua_ModificaNavigation = new HashSet<tbEmpleados>();
            tbEstadosCivilesEsta_Usua_CreacionNavigation = new HashSet<tbEstadosCiviles>();
            tbEstadosCivilesEsta_Usua_ModificaNavigation = new HashSet<tbEstadosCiviles>();
            tbFacturaDetalleFaDe_Usua_CreacionNavigation = new HashSet<tbFacturaDetalle>();
            tbFacturaDetalleFaDe_Usua_ModificaNavigation = new HashSet<tbFacturaDetalle>();
            tbFacturaFact_Usua_CreacionNavigation = new HashSet<tbFactura>();
            tbFacturaFact_Usua_ModificaNavigation = new HashSet<tbFactura>();
            tbMunicipiosMuni_Usua_CreacionNavigation = new HashSet<tbMunicipios>();
            tbMunicipiosMuni_Usua_ModificaNavigation = new HashSet<tbMunicipios>();
            tbPantallasPant_Usua_CreacionNavigation = new HashSet<tbPantallas>();
            tbPantallasPant_Usua_ModificaNavigation = new HashSet<tbPantallas>();
            tbPantallasPorRolesParo_Usua_CreacionNavigation = new HashSet<tbPantallasPorRoles>();
            tbPantallasPorRolesParo_Usua_ModificaNavigation = new HashSet<tbPantallasPorRoles>();
            tbPaquetesPaqe_Usua_CreacionNavigation = new HashSet<tbPaquetes>();
            tbPaquetesPaqe_Usua_ModificaNavigation = new HashSet<tbPaquetes>();
            tbPaquetesPorComidasPaCo_Usua_CreacionNavigation = new HashSet<tbPaquetesPorComidas>();
            tbPaquetesPorComidasPaCo_Usua_ModificaNavigation = new HashSet<tbPaquetesPorComidas>();
            tbPostresPost_Usua_CreacionNavigation = new HashSet<tbPostres>();
            tbPostresPost_Usua_ModificaNavigation = new HashSet<tbPostres>();
            tbPromocionesPorComidasPrSe_Usua_CreacionNavigation = new HashSet<tbPromocionesPorComidas>();
            tbPromocionesPorComidasPrSe_Usua_ModificaNavigation = new HashSet<tbPromocionesPorComidas>();
            tbPromocionesProm_Usua_CreacionNavigation = new HashSet<tbPromociones>();
            tbPromocionesProm_Usua_ModificaNavigation = new HashSet<tbPromociones>();
            tbRolesRol_Usua_CreacionNavigation = new HashSet<tbRoles>();
            tbRolesRol_Usua_ModificaNavigation = new HashSet<tbRoles>();
            tbSucursalesSucu_Usua_CreacionNavigation = new HashSet<tbSucursales>();
            tbSucursalesSucu_Usua_ModificaNavigation = new HashSet<tbSucursales>();
        }

        public int Usua_Id { get; set; }
        public string Usua_Usuario { get; set; }
        public string Usua_Contra { get; set; }
        public bool? Usua_Admin { get; set; }
        public int? Empl_Id { get; set; }
        public int? Rol_Id { get; set; }
        public int? Usua_Usua_Creacion { get; set; }
        public DateTime? Usua_Fecha_Creacion { get; set; }
        public int? Usua_Usua_Modifica { get; set; }
        public DateTime? Usua_Fecha_Modifica { get; set; }
        public bool? Usua_Activo { get; set; }

        [NotMapped]
        public string Empl_Empleado { get; set; }
        [NotMapped]
        public int Pant_Id { get; set; }
        [NotMapped]
        public string Pant_Descripcion { get; set; }

        [NotMapped]
        public string Rol_Descripcion { get; set; }

        public virtual tbEmpleados Empl { get; set; }
        public virtual tbRoles Rol { get; set; }
        public virtual tbUsuarios Usua_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbUsuarios> InverseUsua_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbAlimentos> tbAlimentosAlim_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbAlimentos> tbAlimentosAlim_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbBebidas> tbBebidasBebi_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbBebidas> tbBebidasBebi_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbCargos> tbCargosCarg_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbCargos> tbCargosCarg_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbClientes> tbClientesClie_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbClientes> tbClientesClie_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbCombosPersonales> tbCombosPersonalesComb_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbCombosPersonales> tbCombosPersonalesComb_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbComplementos> tbComplementosComp_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbComplementos> tbComplementosComp_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbDepartamentos> tbDepartamentosDept_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbDepartamentos> tbDepartamentosDept_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbEmpleados> tbEmpleadosEmpl_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbEmpleados> tbEmpleadosEmpl_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbEstadosCiviles> tbEstadosCivilesEsta_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbEstadosCiviles> tbEstadosCivilesEsta_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbFacturaDetalle> tbFacturaDetalleFaDe_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbFacturaDetalle> tbFacturaDetalleFaDe_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbFactura> tbFacturaFact_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbFactura> tbFacturaFact_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbMunicipios> tbMunicipiosMuni_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbMunicipios> tbMunicipiosMuni_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbPantallas> tbPantallasPant_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbPantallas> tbPantallasPant_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbPantallasPorRoles> tbPantallasPorRolesParo_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbPantallasPorRoles> tbPantallasPorRolesParo_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbPaquetes> tbPaquetesPaqe_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbPaquetes> tbPaquetesPaqe_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbPaquetesPorComidas> tbPaquetesPorComidasPaCo_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbPaquetesPorComidas> tbPaquetesPorComidasPaCo_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbPostres> tbPostresPost_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbPostres> tbPostresPost_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbPromocionesPorComidas> tbPromocionesPorComidasPrSe_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbPromocionesPorComidas> tbPromocionesPorComidasPrSe_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbPromociones> tbPromocionesProm_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbPromociones> tbPromocionesProm_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbRoles> tbRolesRol_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbRoles> tbRolesRol_Usua_ModificaNavigation { get; set; }
        public virtual ICollection<tbSucursales> tbSucursalesSucu_Usua_CreacionNavigation { get; set; }
        public virtual ICollection<tbSucursales> tbSucursalesSucu_Usua_ModificaNavigation { get; set; }
    }
}