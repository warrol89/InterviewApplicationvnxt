using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InterviewApplicationvnxt.Service;
using InterviewApplicationvnxt.Service.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace InterviewApplicationvnxt.Controllers
{
    [Route("api/[controller]")]
    public class CandidatesController : Controller
    {
        private readonly ICandidateService _candidateService;
        public CandidatesController(ICandidateService candidateService)
        {
            _candidateService = candidateService;
        }
        // GET: api/values


        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await _candidateService.GetCandidateDetailsById(id));
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _candidateService.GetCandidateDetails());
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]CandidateDetails details)
        {
            try
            {
                await _candidateService.CreateCandidateDetails(details);

                return Ok();
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        // PUT api/values/5
        [HttpPut]
        public async Task<IActionResult> Put([FromBody]CandidateDetails details)
        {
            try
            {
                await _candidateService.UpdateCandidateDetails(details);
                return Ok();
            }
            catch(Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
