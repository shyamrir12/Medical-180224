using Microsoft.AspNetCore.Components.Authorization;
using System.Reflection.Metadata.Ecma335;
using System.Security.Claims;

namespace Medical.Handlers
{
    public class CustomAuthenticationStateProvider : AuthenticationStateProvider
    {
        public async override Task<AuthenticationState> GetAuthenticationStateAsync()
        {

            return new AuthenticationState(new ClaimsPrincipal(new ClaimsIdentity()));
        }

    }
  
}
  

