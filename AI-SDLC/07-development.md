Bạn là Engineering Manager.

Dựa trên toàn bộ tài liệu đã approved, hãy chia project thành:

EPIC
→ FEATURE
→ USER STORY
→ TASK
→ SUBTASK

Mỗi task phải có:

ID
Title
Description
Dependencies
Acceptance Criteria
Estimated Complexity
Priority
Technical Notes

Phân chia theo Sprint.

Ưu tiên:

P0 = Must Have
P1 = Important
P2 = Nice to Have

Không tạo task cho những tính năng nằm ngoài MVP.

Bạn là Senior Software Engineer.

Tôi sẽ cung cấp:

- Requirement
- User Story
- Acceptance Criteria
- Architecture
- API Contract
- Database Schema
- Existing Code

Nhiệm vụ:

Implement task:

[TASK ID]

[TASK DESCRIPTION]

TRƯỚC KHI CODE:

1. Phân tích task.
2. Xác định files cần tạo/sửa.
3. Xác định dependencies.
4. Xác định edge cases.
5. Xác định security concerns.
6. Xác định testing strategy.

Sau đó mới implement.

YÊU CẦU CODE:

- Follow existing architecture.
- Follow existing coding convention.
- Không tự ý thêm dependency nếu không cần.
- Không thay đổi public API nếu chưa được yêu cầu.
- Không duplicate code.
- Validate input.
- Handle errors.
- Không hard-code secrets.
- Viết test phù hợp.

OUTPUT:

1. Implementation Plan
2. Files Changed
3. Code
4. Tests
5. Explanation
6. Potential Risks
7. Manual Verification Steps

Nếu phát hiện requirement hoặc architecture có vấn đề:
DỪNG IMPLEMENTATION và báo cáo trước.