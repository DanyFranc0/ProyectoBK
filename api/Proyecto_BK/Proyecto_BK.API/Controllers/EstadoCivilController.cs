﻿using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Proyecto_BK.BusinessLogic.Services;
using Proyecto_BK.Common.Models;
using Proyecto_BK.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Proyecto_BK.API.Controllers
{
    [ApiController]
    public class EstadoCivilController : Controller
    {
        private readonly GeneralServices _generalServices;
        private readonly IMapper _mapper;

        public EstadoCivilController(GeneralServices GeneralServices, IMapper mapper)
        {
            _generalServices = GeneralServices;
            _mapper = mapper;
        }

        [HttpGet("API/[controller]/List")]
        public IActionResult List() //EstadoCivilDDL
        {

            var list = _generalServices.ListEstado();
            return Ok(list.Data);
        }

        [HttpGet("API/[controller]/EstadoCivilDDL")]
        public IActionResult EstadoCivilDDL() //EstadoCivilDDL
        {

            var list = _generalServices.EstadoCivilDDL();
            return Ok(list.Data);
        }
        [HttpGet("API/[controller]/Fill")]

        public IActionResult Fill(int Esta_Id)
        {

            var list = _generalServices.LlenarEstado(Esta_Id);
            return Ok(list);
        }

        [HttpPost("API/[controller]/Insert")]
        public IActionResult Create(EstadoCivilViewModel json)
        {
            _mapper.Map<tbEstadosCiviles>(json);
            var modelo = new tbEstadosCiviles()
            {
                Esta_Descripcion = json.Esta_Descripcion,
                Esta_Usua_Creacion = 1,
                Esta_Fecha_Creacion = DateTime.Now
            };
            var response = _generalServices.CrearEstado(modelo);
            return Ok(response);
        }
        [HttpPut("API/[controller]/Update")]
        public IActionResult Update(EstadoCivilViewModel json)
        {
            _mapper.Map<tbEstadosCiviles>(json);
            var modelo = new tbEstadosCiviles()
            {
                Esta_Id = json.Esta_Id,
                Esta_Descripcion = json.Esta_Descripcion,
                Esta_Usua_Modifica = 1,
                Esta_Fecha_Modifica = DateTime.Now
            };
            var list = _generalServices.EditarEstado(modelo);
            return Ok(list);
        }
        [HttpDelete("API/[controller]/Delete")]
        public IActionResult Delete(int Esta_Id)
        {
            var list = _generalServices.EliminarEstado(Esta_Id);
            return Ok(list);
        }
    }
}