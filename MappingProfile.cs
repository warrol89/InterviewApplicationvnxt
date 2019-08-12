using System;
using AutoMapper;
using InterviewApplicationvnxt.Service.Models;
using InterviewApplicationvnxt.Data;

namespace InterviewApplicationvnxt
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            CreateMap<Service.Models.CandidateDetails, Data.CandidateDetails>().ReverseMap();
        }


    }
}
