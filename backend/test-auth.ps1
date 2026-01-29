# Test authentication flow
Write-Host "Testing authentication flow..."

# 1. Register a parent
Write-Host "1. Registering parent..."
$timestamp = (Get-Date -Format "yyyyMMddHHmmss")
$registerBody = @{
    email = "test+$timestamp@example.com"
    password = "password123"
    name = "Test Parent"
} | ConvertTo-Json

try {
    $registerResponse = Invoke-RestMethod -Uri "http://localhost:3000/auth/register" -Method Post -Body $registerBody -ContentType "application/json"
    Write-Host "Registration successful:"
    $registerResponse | ConvertTo-Json -Depth 10
    
    $token = $registerResponse.accessToken
    
    # 2. Generate invitation code
    Write-Host "`n2. Generating invitation code..."
    $invitationResponse = Invoke-RestMethod -Uri "http://localhost:3000/api/parents/invitations/generate" -Method Post -Headers @{ "Authorization" = "Bearer $token" }
    Write-Host "Invitation generated:"
    $invitationResponse | ConvertTo-Json -Depth 10
    
} catch {
    Write-Host "Error: $($_.Exception.Message)"
    if ($_.Exception.Response) {
        Write-Host "Response: $($_.Exception.Response.StatusCode)"
    }
}